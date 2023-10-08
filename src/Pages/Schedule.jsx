import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"


const Senin = React.lazy(() => import("../components/Mapel/Senin"));
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"));
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"));
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"));
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"));

const Schedule = () => {
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	const currentDay = daysOfWeek[new Date().getDay()]
	const currentWeek = Math.floor((new Date().getDate() - 1) / 7) + 1

	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	let piketGroup = []

	// Menentukan kelompok piket berdasarkan minggu saat ini
	if (currentWeek === 1 || currentWeek === 3) {
		piketGroup = [
			["Nicolas", "Togi", "Paulista", "Damar"],
			["Farel", "Jeriko", "Wahyu", "Davina"],
			["Alya", "Hendri", "Hisyam", "Dafy"],
			["Putri", "Natar", "Wahid", "Fadliansyah"],
			["Cariska", "Pratiwi", "Ridho", "Farji"],
		]
	} else if (currentWeek === 2 || currentWeek === 4) {
		piketGroup = [
			["Annissa", "Daus", "Eki", "Attala"],
			["Sera", "Sultan", "Dimas", "Lista"],
			["Windi", "Amel", "Arif", "Fadli"],
			["Zaini", "Dendi", "Raka", "Bari"],
			["Putri", "Paulista", "Nila"],
		]
	}

	const dayComponents = [
		null, // Kosongkan indeks 0
		Senin,
		Selasa,
		Rabu,
		Kamis,
		Jumat,
	]

	// Menampilkan komponen berdasarkan hari saat ini
	const TodayComponent = dayComponents[new Date().getDay()]

	// Menampilkan nama-nama piket sesuai dengan hari dan minggu saat ini
	const currentPiketNames = piketGroup[new Date().getDay() - 1]

	return (
		<>
			{/* Jadwal Mapel */}
			<div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16 " >
			<div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
				<div className="text-2xl font-medium mb-5" data-aos="fade-up" data-aos-duration="500">
					{currentDay}
				</div>
				<div data-aos="fade-up" data-aos-duration="400">
					{TodayComponent ? (
						<TodayComponent />
					) : (
						<p className="opacity-50">Tidak ada Jadwal Hari Ini</p>
					)}
				</div>
			</div>
			{/*  */}

			{/* Jadwal Piket */}
			<div className="text-white flex flex-col justify-center items-center mt-8 lg:mt-0 overflow-y-hidden">
				<div
					className="text-2xl font-medium mb-5 text-center"
					data-aos="fade-up"
					data-aos-duration="500">
					Piket
				</div>

				{currentPiketNames && currentPiketNames.length > 0 ? (
					currentPiketNames.map((piketName, index) => (
						<div
							key={index}
							className={` border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${
								index === currentPiketNames.length - 1 ? "border-b-2" : ""
							}`}
							data-aos="fade-up"
							data-aos-duration={600 + index * 100}>
							<div className="text-base font-medium">{piketName}</div>
						</div>
					))
				) : (
					<p className="opacity-50">Tidak ada Jadwal Piket Hari Ini</p>
				)}
			</div>
			</div>
			
			{/*  */}
		</>
	)
}

export default Schedule
