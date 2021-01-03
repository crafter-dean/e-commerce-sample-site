import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LeftArrowIcon, RightArrowIcon } from '../utils/icons';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const getRange = (from, to, step = 1) => {
	let i = from;
	const range = [];
	while (i <= to) {
		range.push(i);
		i += step;
	}
	return range;
};

class Pagination extends Component {
	constructor(props) {
		super(props);
		const {
			totalRecords = null,
			pageLimit = 30,
			pageNeighbors = 0,
			currentPage = 1,
		} = props;

		this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
		this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

		this.pageNeighbors =
			typeof pageNeighbors === 'number'
				? Math.max(0, Math.min(pageNeighbors, 2))
				: 0;

		this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
		this.state = {
			currentPage: typeof currentPage === 'number' ? currentPage : 1,
		};
	}

	componentDidMount() {
		// this.gotoPage(1);
	}

	gotoPage = (page) => {
		const { onPageChanged = (f) => f } = this.props;
		const currentPage = Math.max(0, Math.min(page, this.totalPages));
		const paginationData = {
			currentPage,
			totalPages: this.totalPages,
			pageLimit: this.pageLimit,
			totalRecords: this.totalRecords,
		};
		this.setState({ currentPage }, () => onPageChanged(paginationData));
	};

	handleClick = (page) => (e) => {
		e.preventDefault();
		this.gotoPage(page);
	};
	handleMoveLeft = (e) => {
		e.preventDefault();
		this.gotoPage(this.state.currentPage - this.pageNeighbors * 2 - 1);
	};
	handleMoveRight = (e) => {
		e.preventDefault();
		this.gotoPage(this.state.currentPage + this.pageNeighbors * 2 + 1);
	};

	fetchPageNumbers = () => {
		const totalPages = this.totalPages;
		const pageNeighbors = this.pageNeighbors;
		const currentPage = this.state.currentPage;
		const totalNumbers = this.pageNeighbors * 2 + 3;
		const totalBlocks = totalNumbers + 2;
		console.log('halp 2 ', totalNumbers, totalBlocks);

		if (totalPages > totalBlocks) {
			const startPage = Math.max(2, currentPage - pageNeighbors);
			const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);
			let pages = getRange(startPage, endPage);
			const hasLeftSpill = startPage > 2;
			const hasRightSpill = totalPages - endPage > 1;
			const spillOffset = totalNumbers - (pages.length + 1);

			switch (true) {
				case hasLeftSpill && !hasRightSpill: {
					const extraPages = getRange(startPage - spillOffset, startPage - 1);
					pages = [LEFT_PAGE, ...extraPages, ...pages];
					break;
				}
				case !hasLeftSpill && hasRightSpill: {
					const extraPages = getRange(endPage + 1, endPage + spillOffset);
					pages = [...pages, ...extraPages, RIGHT_PAGE];
					break;
				}
				case hasLeftSpill && hasRightSpill:
				default: {
					pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
					break;
				}
			}

			return [1, ...pages, totalPages];
		}
		return getRange(1, totalPages);
	};
	render() {
		if (!this.totalRecords || this.totalPages === 1) return null;
		const { currentPage } = this.state;
		const pages = this.fetchPageNumbers();
		console.log('halp', pages);
		return (
			<>
				<nav>
					<ul className="pagination">
						{pages.map((page, i) => {
							if (page === LEFT_PAGE)
								return (
									<li className="pagination__button" key={i}>
										<a
											href="#"
											className="pagination__link"
											onClick={this.handleMoveLeft}
										>
											<span>
												<LeftArrowIcon fill="#000" size={16} />
											</span>
											Newer
										</a>
									</li>
								);
							if (page === RIGHT_PAGE)
								return (
									<li className="pagination__button" key={i}>
										<a
											href="#"
											className="pagination__link"
											onClick={this.handleMoveRight}
										>
											Older
											<span>
												<RightArrowIcon fill="#000" size={16} />
											</span>
										</a>
									</li>
								);
							return (
								<li
									key={i}
									className={`pagination__button${
										currentPage === page ? '--active' : ''
									}`}
								>
									<a
										href="#"
										className="pagination__link"
										onClick={this.handleClick(page)}
									>
										{page}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</>
		);
	}
}
Pagination.propTypes = {
	totalRecords: PropTypes.number.isRequired,
	pageLimit: PropTypes.number,
	pageNeighbors: PropTypes.number,
	onPageChanged: PropTypes.func,
	currentPage: PropTypes.number.isRequired,
};

export default Pagination;
