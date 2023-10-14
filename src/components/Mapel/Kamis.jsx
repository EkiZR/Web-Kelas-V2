const Kamis = () => {
	return (
		<>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Teknik Jaringan</div>
				<div className="flex justify-center items-center text-sm">07.00-09.40</div>
			</div>
			<div
				className=" flex justify-between py-[0.50rem] w-72 px-3 opacity-60"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Istirahat</div>
				<div className="flex justify-center items-center text-sm">09.40-10.20</div>
			</div>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="700">
				<div className="w-[50%] text-base  font-medium">Penjaskes</div>
				<div className="flex justify-center items-center text-sm">10.20-11.40</div>
			</div>
			<div
				className=" border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="800">
				<div className="w-[50%] text-base  font-medium">Istirahat</div>
				<div className="flex justify-center items-center text-sm">11.40-12.20</div>
			</div>

			<div
				className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="1000">
				<div className="w-[50%] text-base font-medium">TKJ</div>
				<div className="flex justify-center items-center text-sm">12.20-13.40</div>
			</div>
		</>
	)
}

export default Kamis
