
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
        <div id="display-leauge">
            <div className="single">
                <div className="single-display col-12 col-sm-6 col-md-4 col-xl-3">
                    <div className="btn-floating my-4">
                        <h4>{strLeague}</h4>
                        <p>Sports Type: Football</p>
                    </div>
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