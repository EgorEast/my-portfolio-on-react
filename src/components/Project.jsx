import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ index, title, about, model, usedTechnologies, links }) => {
	return (
		<div className='section-item'>
			<h3>{''.concat(`${index + 1}. `, title)}</h3>
			<div>
				{about ? [<h4>About:</h4>, <p>{about}</p>] : null}
				{model ? (
					<span>
						Model:{' '}
						<a href={model.href} target='_blank' rel='noreferrer'>
							{model.content}
						</a>
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
							<>
								{link.type === 'my-page' ? (
									<Link to={link.to}>{link.content}</Link>
								) : (
									<a href={link.href} target='_blank' rel='noreferrer'>
										{link.content}
									</a>
								)}
							</>,
						];
					})}
				</span>
			</div>
		</div>
	);
};

export default Project;
