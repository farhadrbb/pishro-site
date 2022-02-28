import React, { useEffect, useState } from "react";
import { Box, useTheme, CircularProgress } from '@material-ui/core'

import TitlePage from '../../../../common/TitlePage';
import { useDispatch, useSelector } from "react-redux";
import Carousel from "./Carousel";
import { actionTypes as actionTypesNews, } from "../../../../../redux/news/select_news/index";

export default function Index() {

    const theme = useTheme()
    const dispatch = useDispatch();

    const stateReducer = useSelector((state) => state.news_select_reducer);

    const [pagnation, setPagnation] = useState({
        number: 1,
        count: 2,
    });

    const [flagApi, setflagApi] = useState(false);

    useEffect(() => {
        apiCall();
    }, [flagApi]);

    useEffect(() => {
        setPagnation((prevState) => ({
            ...prevState,
            count: Math.ceil(stateReducer.total / stateReducer.size),
        }));
    }, [stateReducer]);



    const apiCall = () => {
        let { size } = stateReducer;
        let _data = {
            from: pagnation.number,
            size,
        };
        dispatch({ type: actionTypesNews.selectNewsAsync, payload: _data });
    };

    return (
        <div>
            <Box textAlign="center">
                <TitlePage position="bottomCenter" padding="60px 0px">
                    اخبار و تازه‌های <span style={{ color: theme.palette.light.type2 }}>پیشرو</span>
                </TitlePage>

                {
                    stateReducer.loading && (
                        <Box textAlign="center">
                            <CircularProgress />
                        </Box>
                    )
                }
                {
                    !stateReducer.loading && (
                        <Box textAlign="left">
                            <Carousel
                                data={stateReducer.data}
                                pagnation={pagnation}
                                setPagnation={setPagnation}
                                setflagApi={setflagApi}
                            />
                        </Box>
                    )
                }

            </Box>
        </div>
    )
}
