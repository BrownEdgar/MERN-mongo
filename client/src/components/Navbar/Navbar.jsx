
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
	return (
		<header>
			<div className="logo">
				<Link to='/'>Logo</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/login'>login</Link>
					</li>
					<li>
						<Link to='/cars'>Cars</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
