import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
//import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
     if(!confirmed) {
         return 'Loading';
     }
     console.log(({ data: {confirmed, recovered, deaths, lastUpdate}}))
    return (
        //<div className={styles.container}>
            <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>
                            Infected
                        </Typography>
                        <Typography variant="h5"> 
                        <CountUp 
                        start={0}
                        end={confirmed.value}
                        duration={2.5}
                        seperator="," 
                        />

                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                        <CountUp 
                        start={0}
                        end={recovered.value}
                        duration={2.5}
                        seperator="," 
                        />
                            Number of active cases of covid 19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">{recovered.value}
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                        <CountUp 
                        start={0}
                        end={deaths.value}
                        duration={2.5}
                        seperator="," 
                        />
                         Number of recovered cases of covid 19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">{deaths.value}
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()} 
                        </Typography>
                        <Typography variant="body2">
                            Number of death cases of covid 19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
