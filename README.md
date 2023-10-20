# Web Kelas
Web Kelas adalah platform yang bertujuan untuk menyediakan informasi tentang kelas kami. 

Teknologi yang digunakan diantaranya: 
- React JS: Membangun antarmuka pengguna yang responsif dan interaktif.
- MUI: MUI (Material-UI) digunakan untuk mendesain antarmuka dengan komponen Material Design yang indah.
- Tailwind CSS: Memastikan tampilan dan gaya yang modern dan fleksibel.
- Slick JS: Untuk tampilan galeri yang halus dan menarik.
- Firebase: Menyediakan backend yang aman dan efisien untuk pengelolaan data.
- AOS: Animasi yang menarik untuk meningkatkan tampilan dan nuansa situs.

Apa yang dapat Anda temukan di web ini:
- Text Anonim: Bagian ini memungkinkan pengguna untuk berinteraksi dengan informasi kelas tanpa harus mengungkapkan identitas mereka.
- Gallery: Menampilkan gambar-gambar menarik yang terkait dengan kelas kami.
- Structure And Schedule: Memberikan informasi rinci tentang struktur kelas dan jadwal yang tersedia.

Project ini di buat oleh :
- Eki
- Dafy

Kunjungi situs web kami di https://xitkj3.vercel.app/ untuk mendapatkan informasi lebih lanjut. Kami sangat menghargai apabila Anda ingin menggunakan proyek ini, harap sertakan kredit kami dalam penggunaan Anda. Terima kasih! 🙏

# Tutorial Running Webnya 
Note: ini merupakan cara saya, jika ada yang lebih mudah dan efisien silahkan

-Install NodeJS terlebih dahulu
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/59fd1565-d706-47b0-95e2-691b8081aa7b)

1.Lakukan git clone ![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/8f881d1e-353a-47b8-ac6f-fec60c1037dd)

2.Buka foldernya di vscode, buka terminal lakukan npm install --legacy-peer-deps
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/6d19e7c6-d3cd-457d-9274-7f3058d34bbc)

3.Jangan lupa ganti config firebase project ini, dengan config firebase anda. berikut cara membuat database di firebase
 -langkah pertama silahkan login
 -buka konsol, add project + 
 ![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/35465dfb-ebe7-454f-8257-03ce9d88ac22)
 
-tambahkan storage dan firestore database 
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/4f770bd6-998d-44a4-b836-1881bd021944)

-Ubah rules firestore database jadi sebagai berikut :
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/183df580-a341-4cf1-8769-3384ea4f9bab)

-Ubah rules storage jadi sebagai berikut :
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/507b523e-7d41-4ed5-a875-0d82aac70f6a)

-Pada storage tambahkan folder GambarAman, nah disitu bisa upload file gambar anda
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/1f3fa75e-2478-4f08-bc9a-a5db7602cc95)

-Setelah itu pilih project settings
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/677341d3-5b0e-48a7-ae22-f13d26395852)

-Scroll sedikit kebawah tekan tombol </>
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/a02a3656-9118-4a46-8955-115441cbf42b)

-Setelah selesai copy confignya 
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/a79ecd78-dd08-4b32-9557-3f599001d739)

-Ganti disini,file firebase.js
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/c69386fe-814b-4ae5-b526-4ca2ea0414fa)

-buka lagi terminalnya ketik npm run dev
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/7802b25c-fa5a-4037-a8c2-c36e165159e1)

# Fitur Rahasia memblokir seseorang lewat ip
-Tambahkan collection di firestore database seperti berikut
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/f92ee3db-9946-4b80-8a09-1ff91a2e9341)

-Add field seperti berikut 
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/59da4808-8d88-4172-9d23-2b7fbc3e5f9b)

-Untuk Mendapatkan ip target, pergi ke collection chat disitu terdapat ip user setiap mengirim pesan
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/4e8e29ff-fe7a-4ce6-b771-c62cfe0ccc5e)

------
![image](https://github.com/EkiZR/Web-Kelas-V2/assets/92925560/da0b81c4-a8ff-4f64-a32e-ae4ab59925f2)


sekian, kurang lebihnya mohon maaf 🙏












