import * as React from "react"
import PropTypes from "prop-types"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useSpring, animated } from "@react-spring/web"
import UploadImage from "./UploadImage"

// Impor ikon tombol silang (close button)
import CloseIcon from "@mui/icons-material/Close"

const Fade = React.forwardRef(function Fade(props, ref) {
	const { children, in: open, onClick, onEnter, onExited, ownerState, ...other } = props
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		config: {
		  duration: open ? 200 : 50, // Mengatur durasi berdasarkan kondisi open
		},
		onStart: () => {
		  if (open && onEnter) {
			onEnter(null, true);
		  }
		},
		onRest: () => {
		  if (!open && onExited) {
			onExited(null, true);
		  }
		},
	  });
	  
	  
	return (
		<animated.div ref={ref} style={style} {...other}>
			{React.cloneElement(children, { onClick })}
		</animated.div>
	)
})

Fade.propTypes = {
	children: PropTypes.element.isRequired,
	in: PropTypes.bool,
	onClick: PropTypes.any,
	onEnter: PropTypes.func,
	onExited: PropTypes.func,
	ownerState: PropTypes.any,
}

/* const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid red",
	boxShadow: 24,
	p: 4,
} */

export default function ButtonSend() {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Button onClick={handleOpen}>
				<button className="flex items-center space-x-2 text-white px-6 py-4" id="SendImg">
					<span className="text-base lg:text-1xl">Send</span>
					<img src="/upload.png" alt="Icon" className="w-6 h-6" />
				</button>
			</Button>

			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						TransitionComponent: Fade,
					},
				}}>
				<Fade in={open}>
					<Box className="modal-container">
						{/* Tambahkan tombol silang di kanan atas */}
						<Button onClick={handleClose} style={{ position: "absolute", top: "0", right: "0" }}>
						<CloseIcon
							style={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer",color: "grey", }}
							onClick={handleClose}
						/>
						</Button>
						{/* <Typography id="spring-modal-title" variant="h6" component="h2">
							Text in a modal
						</Typography> */}
						<Typography id="spring-modal-description" sx={{ mt: 2 }}>
							<UploadImage />
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	)
}
