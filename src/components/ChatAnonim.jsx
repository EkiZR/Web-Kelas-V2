import React, { useState, useEffect, useRef } from "react";
import { addDoc, collection, query, orderBy, onSnapshot, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import axios from "axios";
import Swal from "sweetalert2";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false);
  const [userIp, setUserIp] = useState("");
  const [messageCount, setMessageCount] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state loading

  const chatsCollectionRef = collection(db, "chats");
  const messagesEndRef = useRef(null);

  // Fungsi untuk mengambil daftar alamat IP yang diblokir dari Firebase Firestore
  const fetchBlockedIPs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blacklist_ips"));
      const blockedIPs = querySnapshot.docs.map((doc) => doc.data().ipAddress);
      return blockedIPs;
    } catch (error) {
      console.error("Gagal mengambil daftar IP yang diblokir:", error);
      return [];
    }
  }

  useEffect(() => {
    // Memuat pesan dari Firestore dan mengatur langganan untuk memantau perubahan
    try {
      const queryChats = query(chatsCollectionRef, orderBy("timestamp"));
      const unsubscribe = onSnapshot(queryChats, (snapshot) => {
        const newMessages = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            userIp: data.userIp,
          };
        });
        setMessages(newMessages);
        setIsLoading(false); // Matikan loading setelah data diterima
        
        // Only scroll to bottom if it's not the initial load or if shouldScrollToBottom is true
        if (!isInitialLoad && shouldScrollToBottom) {
          scrollToBottom();
        }
        
        // After the first load, set isInitialLoad to false
        if (isInitialLoad) {
          setIsInitialLoad(false);
        }
      }, (error) => {
        console.error("Error saat memuat chat:", error);
        setIsLoading(false);
      });

      return () => {
        unsubscribe(); // Membersihkan langganan saat komponen tidak lagi digunakan
      }
    } catch (error) {
      console.error("Gagal membuat query atau snapshot:", error);
      setIsLoading(false);
    }
  }, [shouldScrollToBottom, isInitialLoad]);

  useEffect(() => {
    // Mengambil alamat IP pengguna dan memeriksa batasan pesan
    getUserIp();
    checkMessageCount();
  }, []);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  const getUserIp = async () => {
    try {
      // Cek apakah alamat IP sudah disimpan di localStorage
      const cachedIp = localStorage.getItem("userIp");
      const ipExpiration = localStorage.getItem("ipExpiration");
      const currentTime = new Date().getTime();
      
      if (cachedIp && ipExpiration && parseInt(ipExpiration) > currentTime) {
        setUserIp(cachedIp);
        return;
      }
      
      // Jika tidak ada di localStorage atau sudah kedaluwarsa, ambil alamat IP dari API eksternal
      const response = await axios.get("https://ipapi.co/json");
      const newUserIp = response.data.network;
      setUserIp(newUserIp);
      
      // Simpan alamat IP dalam localStorage dengan waktu kedaluwarsa (misalnya, 1 jam)
      const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 jam
      localStorage.setItem("userIp", newUserIp);
      localStorage.setItem("ipExpiration", expirationTime.toString());
    } catch (error) {
      console.error("Gagal mendapatkan alamat IP:", error);
      // Gunakan fallback IP jika gagal mendapatkan dari API
      const fallbackIp = "unknown";
      setUserIp(fallbackIp);
    }
  };

  const checkMessageCount = () => {
    const userIpAddress = userIp || localStorage.getItem("userIp") || "unknown";
    const currentDate = new Date();
    const currentDateString = currentDate.toDateString();
    const storedDateString = localStorage.getItem("messageCountDate");

    if (currentDateString === storedDateString) {
      // Jika tanggal saat ini sama dengan tanggal yang disimpan, periksa batasan pesan
      const userSentMessageCount = parseInt(localStorage.getItem(userIpAddress)) || 0;
      if (userSentMessageCount >= 20) { // Batasan pesan per hari (20 pesan)
        Swal.fire({
          icon: "error",
          title: "Message limit exceeded",
          text: "You have reached your daily message limit.",
          customClass: {
            container: "sweet-alert-container",
          },
        });
      } else {
        setMessageCount(userSentMessageCount);
      }
    } else {
      // Jika tanggal berbeda, bersihkan data penghitungan pesan sebelumnya
      localStorage.removeItem(userIpAddress);
      localStorage.setItem("messageCountDate", currentDateString);
    }
  };

  // Fungsi untuk memeriksa apakah alamat IP pengguna ada dalam daftar hitam
  const isIpBlocked = async () => {
    const blockedIPs = await fetchBlockedIPs();
    return blockedIPs.includes(userIp);
  };

  const sendMessage = async () => {
    if (message.trim() !== "") {
      try {
        // Memanggil isIpBlocked untuk memeriksa apakah pengguna diblokir
        const isBlocked = await isIpBlocked();

        if (isBlocked) {
          Swal.fire({
            icon: "error",
            title: "Blocked",
            text: "You are blocked from sending messages.",
            customClass: {
              container: "sweet-alert-container",
            },
          });
          return;
        }

        const senderImageURL = auth.currentUser?.photoURL || "/AnonimUser.png";
        const trimmedMessage = message.trim().substring(0, 60);
        const userIpAddress = userIp || localStorage.getItem("userIp") || "unknown";

        if (messageCount >= 20) { // Batasan pesan per hari (20 pesan)
          Swal.fire({
            icon: "error",
            title: "Message limit exceeded",
            text: "You have reached your daily message limit.",
            customClass: {
              container: "sweet-alert-container",
            },
          });
          return;
        }

        const updatedSentMessageCount = messageCount + 1;
        localStorage.setItem(userIpAddress, updatedSentMessageCount.toString());
        setMessageCount(updatedSentMessageCount);

        // Menambahkan pesan ke Firestore
        await addDoc(chatsCollectionRef, {
          message: trimmedMessage,
          sender: {
            image: senderImageURL,
          },
          timestamp: new Date(),
          userIp: userIpAddress,
        });

        setMessage(""); // Menghapus pesan setelah mengirim
        // Enable scrolling to bottom after sending a message
        setShouldScrollToBottom(true);
      } catch (error) {
        console.error("Gagal mengirim pesan:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send message. Please try again.",
          customClass: {
            container: "sweet-alert-container",
          },
        });
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  // Reset shouldScrollToBottom when user scrolls manually
  const handleScroll = () => {
    setShouldScrollToBottom(false);
  };

  return (
    <div className="w-full h-auto max-w-lg mx-auto p-4" id="ChatAnonim">
      <div className="text-center text-4xl font-semibold mb-4" id="Glow">
        Text Anonim
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        <>
          <div 
            className="mt-5 bg-opacity-40 bg-gray-800 rounded-lg p-4 min-h-[300px] max-h-[400px] overflow-y-auto" 
            id="KotakPesan" 
            onScroll={handleScroll}
            style={{ 
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)"
            }}
          >
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className="flex items-start text-sm py-2 px-1">
                  <img src={msg.sender?.image || "/AnonimUser.png"} alt="User Profile" className="h-7 w-7 mr-2 rounded-full" />
                  <div className="relative  bg-gray-700 bg-opacity-50 px-2 py-1 rounded-lg">
                    {msg.message || ""}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400 py-12">
                Belum ada pesan. Mulai percakapan sekarang!
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>
          
          <div 
            id="InputChat" 
            className="flex items-center mt-5 bg-opacity-40 bg-gray-800 rounded-lg px-4 py-2"
            style={{ 
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)"
            }}
          >
            <input
              className="bg-transparent flex-grow pr-4 outline-none placeholder:text-gray-300 placeholder:opacity-60 text-white"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ketik pesan Anda..."
              maxLength={60}
            />
            <button 
              onClick={sendMessage} 
              className="ml-2 p-2 hover:bg-gray-700 hover:bg-opacity-50 rounded-full transition duration-200"
            >
              <img src="/paper-plane.png" alt="" className="h-4 w-4 lg:h-6 lg:w-6" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Chat;