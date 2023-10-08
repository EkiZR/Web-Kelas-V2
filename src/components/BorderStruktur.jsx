const BorderStruktur = (props) => {
	const Jabatan = props.Jabatan;
	const Nama = props.Nama;
	const Width = props.Width;

	return (
		<div className="flex flex-col justify-center items-center"> 
			<div className="text-white text-sm mb-1">{Jabatan}</div>
			<div className={`bg-white text-black rounded-3xl text-[0.8rem] px-2 py-[0.30rem] text-center font-semibold`} style={{ width: Width }}>
				{Nama}
			</div>
		</div>
	)
}

export default BorderStruktur;
