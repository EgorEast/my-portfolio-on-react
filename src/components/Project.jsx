import React from 'react';

const Project = ({ index, title, about, model, usedTechnologies, links }) => {
	return (
		<div class='section-item'>
			<h3>{''.concat(`${index + 1}. `, title)}</h3>
			<div>
				{about ? [<h4>About:</h4>, <p>{about}</p>] : null}
				{model ? (
					<span>
						Model: <a href={model.href}>{model.content}</a>
					</span>
				) : null}
			</div>

			{usedTechnologies ? (
				<div>
					<h4>The used technologies:</h4>
					<ul>
						{usedTechnologies.map((techName) => (
							<li>{techName}</li>
						))}
					</ul>
				</div>
			) : null}

			<div>
				<b>Links: </b>
				<span>
					{links.map((link, index) => {
						return [
							<span>{index !== 0 ? ', ' : null}</span>,
							<a href={link.href} target='_blank' rel='noreferrer'>
								{link.content}
							</a>,
						];
					})}
				</span>
			</div>
		</div>
	);
};

export default Project;
