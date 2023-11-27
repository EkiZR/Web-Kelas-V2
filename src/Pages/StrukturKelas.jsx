import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"

const StrukturKelas = () => {
	const [aosLoaded, setAosLoaded] = useState(false)

	useEffect(() => {
		if (!aosLoaded) {
			AOS.init()
			AOS.refresh()
			setAosLoaded(true)
		}
	}, [aosLoaded])

	return (
		<div className="z-1  relative h-auto lg:h-[83vh] lg:overflow-hidden">
			{/* wali kelas */}
			<div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
				<BorderStruktur Jabatan="Wali Kelas" Nama="Abdul Wahab S.Pdi" Width="150px" />
			</div>
			<div className="flex flex-col justify-center items-center">
				<img src="LineVertikal.svg" alt="" data-aos="fade-up" data-aos-duration="550" />

				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-1rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-1rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-1rem] hidden lg:flex lg:w-[4.2rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-1.93rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-3rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				{/* wakil dan ketua */}
				<div className="flex relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1200">
					<div className="relative left-[0.2rem]">
						<BorderStruktur Jabatan="Ketua Kelas" Nama="Putry" Width="120px" />
					</div>
					<img src="LineHorizontalPendek.svg" className="relative top-3" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<div className="relative right-[0.2rem]">
						<BorderStruktur Jabatan="Wakil Ketua" Nama="Jeriko" Width="120px" />
					</div>
				</div>

				<div data-aos="fade-up" data-aos-duration="120" className="">
					<img src="LineVertikal2.svg" alt="" className="relative top-[-3.8rem]" />
				</div>

				{/* Seketaris dan bendahara */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-4.8rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-4.8rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-4.8rem] hidden lg:flex lg:w-[4.2rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] relative top-[-5.75rem] lg:gap-[27.4rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-6.5rem] lg:gap-[27.4rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className="flex gap-[5rem] relative top-[-6.5rem] lg:gap-[22rem]"
					data-aos="fade-up"
					data-aos-duration="1200">
					<div className="flex-col">
						<BorderStruktur Jabatan="Sekertaris" Nama="Pratiwi" Width="120px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Paulista" Width="120px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Bendahara" Nama="Lista" Width="120px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Davina" Width="120px" />
					</div>
				</div>

				<div className="relative top-[-15rem]" data-aos="fade-up" data-aos-duration="900">
					<img src="LineVertikal3.svg" alt="" />
				</div>

				{/* Keamanan dan Kebersihan */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-15.9rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-15.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-15.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-15.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-16.8rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" className="hidden lg:flex" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-17.7rem] lg:gap-[23.1rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" className="hidden lg:flex" />
				</div>

				<div
					className=" flex gap-[5rem] relative top-[-18rem] lg:gap-[17.5rem]"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="Keamanan" Nama="Damar" Width="120px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Windi" Width="120px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Kebersihan" Nama="Jeriko" Width="120px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Raka" Width="120px" />
					</div>

					<div className="flex-col hidden lg:flex">
						<BorderStruktur Jabatan="Kesehatan" Nama="Eki" Width="120px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Hendri" Width="120px" />
					</div>
				</div>

				{/* Kesehatan */}
				<div
					className=" absolute bottom-[14.5%] lg:hidden"
					data-aos="fade-up"
					data-aos-duration="1200">
					<div className="flex justify-center items-center flex-col">
						<img src="LineVertikal3.svg" alt="" className="lg:hidden" />
						<img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
						<div className="relative bottom-3">
							<BorderStruktur Jabatan="Kesehatan" Nama="Eki" Width="120px" />
							<div className="py-[3%]"></div>
							<BorderStruktur Jabatan="" Nama="Hendri" Width="120px" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StrukturKelas
