import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import avatar from '../images/hiroki.jpg';

import '../styles/main.scss';

export default function Index({ data }) {

  // document.body.classList.add('is-loading');

  return (
			<div id="wrapper">

				{/* <!-- Main --> */}
					<section id="main">
						<header>
							<span className="avatar"><img src={avatar} alt="" /></span>
							<h1>Fabio Hiroki</h1>
							<p>Software Engineer</p>
						</header>

						<footer>
							<ul className="icons">
								<li><a href="https://www.linkedin.com/in/fabio-hiroki-b6739214/" className="fa-linkedin">Linkedin</a></li>
								<li><a href="https://medium.com/@fabiohiroki" className="fa-medium">Medium</a></li>
								<li><a href="#" className="fa-twitter">Twitter</a></li>
								<li><a href="#" className="fa-instagram">Instagram</a></li>
								<li><a href="#" className="fa-goodreads">Good Reads</a></li>
							</ul>
						</footer>
					</section>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<ul className="copyright">
							<li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</footer>

			</div>
  );
}
