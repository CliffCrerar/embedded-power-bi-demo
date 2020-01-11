import { Component, h } from '@stencil/core';

@Component({
	tag: 'app-root',
	styleUrl: 'app-root.css',
})
export class AppRoot {

	render() {
		return (
			<div>
				<header>
					<div>
						<img src="../../assets/icon/Power-Bi-logo-transparent.png" alt="responsive-web" />
					</div>
					<div>
						<h5>Embedded report demo</h5>
						<img src="../../assets/icon/responsive-web-icon.png" alt="responsive-web" />
					</div>
				</header>
				<main>
					<h1>Best for desktop viewing</h1>
					<iframe class="iframe" src="https://app.powerbi.com/view?r=eyJrIjoiZTA3YzJiMjAtMzM1YS00YWJlLTk5ZDItODk4MWEzZTU1NGVjIiwidCI6ImNjY2JmNTAyLTZiOTEtNDBkNi1iZTAyLTVmZmEwZWI3MTFkNiIsImMiOjh9" frameborder="0" allowFullScreen={true}></iframe>

					<div style={{maxWidth: '600px',margin: '10vh auto'}}>
						<p style={{textAlign: 'center'}}>disclaimer</p>
						<small>The above report does not reflect factual data, it an example power BI project output embedded in a web page, not a statement of factual content.</small>
					</div>
					<div>
					<p style={{textAlign: 'right', padding:'20px'}}>
						<small>Author: </small>Cliff Crerar
						</p>
					</div>
				</main>
				<footer>

				</footer>
			</div>
		);
	}
}
