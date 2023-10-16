import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ANALYZE_PERFORMANCE } from '../redux/actions';
import { Chart } from 'react-google-charts';

const PerformanceAnalysis = () => {
    const dispatch = useDispatch();
    const emailResponseData = useSelector(state => state.emailResponseData);

    useEffect(() => {
        dispatch({ type: ANALYZE_PERFORMANCE });
    }, [dispatch]);

    const data = [
        ['Metric', 'Rate'],
        ['Open Rate', emailResponseData.openRate],
        ['Click Through Rate', emailResponseData.clickThroughRate],
        ['Response Rate', emailResponseData.responseRate]
    ];

    return (
        <div id="performanceChart">
            <h2>Performance Analysis</h2>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    chart: {
                        title: 'Email Campaign Performance',
                        subtitle: 'Open rate, Click through rate, and Response rate',
                    },
                }}
            />
        </div>
    );
};

export default PerformanceAnalysis;