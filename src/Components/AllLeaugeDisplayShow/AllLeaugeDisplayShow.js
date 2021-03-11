/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */

import './allLeaugeDisplayShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import React from 'react'


const AllLeaugeDisplayShow = (props) => {
    const { strLeague, idLeague } = props.leauge;
    const history = useHistory();
    const handleClick = (idLeague) => {
        history.push(`/leauge-details/${idLeague}`);
    }

    return (
        <div id="display-leauge" className="">
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                <div className="card-body">
                    <h4 className="card-title">{strLeague}</h4>
                    <p className="card-text">Sports Type: Football</p>
                    <div className="btn">
                    <button onClick={() => handleClick(idLeague)} type="button" className="btn btn-primary">Explore <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllLeaugeDisplayShow;