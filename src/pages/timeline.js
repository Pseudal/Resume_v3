import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import StarIcon from '@mui/icons-material/Star';
import {TimelineData} from "../utility/timeLineData"

const timeline = () => {
    console.log(TimelineData)
    return (
        <div className=' bg-gradient-to-r from-[#a606a6] via-[#7846bc] via-[#435ec1] via-[#006cb8] to-[#0074a6]'>
            <VerticalTimeline>
                {TimelineData && TimelineData.map((data, index) => {
                        return (
                            <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--education"
                            date={data.date}
                            iconStyle={data.color}
                            icon={data.icon}
                            >
                                <h2 className="vertical-timeline-element-title">{data.title}</h2>
                                <h4 className="vertical-timeline-element-subtitle">{data.description}</h4>
                                <div className='flex'>
                                    {data.techno.map((techno, indexImg) => {
                                        return (
                                            <img key={indexImg} src={techno.logo} alt={techno.name} className="w-7 h-7" style={{objectFit: 'cover'}} />
                                        )
                                    })}
                                </div>
                            </VerticalTimelineElement>
                        )
                    })
                }
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    );
};

export default timeline;