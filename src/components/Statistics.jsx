import PropTypes from 'prop-types';
import React from "react";

import { Statistic, Title, StatList, StatItem } from './styled/Data.style';

export const Statistics = ({ title, stats }) => {

    return (
            <Statistic>
                {title && <Title className="title"> {title} </Title>}
                <StatList>
                    {stats.map(({ id, label, percentage }) => {
                        return (
                            <StatItem>
                                <span className="label" key={id}> {label} </span>
                                <span className="percentage" key={id}> {percentage}% </span>
                            </StatItem>
                        )
                    })}
                </StatList>
            </Statistic>
    );
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired, 
    })
    )
};
