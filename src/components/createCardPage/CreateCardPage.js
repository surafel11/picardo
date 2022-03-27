import React, {useState, useRef, useEffect} from 'react';
import {Grid, Button, Slider, Typography, FormControl , Select, MenuItem, InputLabel} from '@mui/material';
import { HexColorPicker } from "react-colorful";

import CircleIcon from '@mui/icons-material/Circle';

import CompanyInformation from './components/CompanyInformation';

function CreateCardPage() {
    const [color, setColor] = useState("#eb190a");
    const [titleColor, setTitleColor] = useState("#000000");

    const [cpl, setCpl] = useState(2);
    const [cpr, setCpr] = useState(2);
    const [cpt, setCpt] = useState(2);
    const [cpb, setCpb] = useState(2);

    const [titleText, setTitleText] = useState('Sample Text');
    const [mottoText, setMottoText] = useState('Sample Motto Text');

    const [colorPickerOn, setColorPickerOn] = useState(false);
    const [colorPickerFor, setColorPickerFor] = useState('');

    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setColorPickerOn(false);
        }
    };

    function paddingSliderValueText(value) {
        return `${value}px`;
    }

    const getPaddingNumbers = () => {
        let nums = [];
        for(var i=0; i<6; i++){
            nums.push(i);
        }
        return nums;
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    return (
        <Grid container direciton="row" width="100%" justifyContent="space-evenly">

            <Grid item width="20%">
                <CompanyInformation onChange={(data) => {
                    setTitleText(data.title);
                    setMottoText(data.motto);
                }} value={{
                    title: titleText,
                    motto: mottoText
                }}/>
            </Grid>

            <Grid container direction="column" justifyContent="center" alignItems="center" width="50%">

                <Grid container direction="row" justifyContent="space-evenly">

                    <Grid container direction="column" width="600px" height="300px" 
                    paddingLeft={cpl} paddingRight={cpr}
                    paddingTop={cpt} paddingBottom={cpb} style={{borderRadius: "30px", backgroundColor: color}}>
                        {/* <h3 style={{color: titleColor}}> Title Text </h3> */}
                        <Typography component="div" style={{fontSize: 50, color: titleColor, fontWeight: 800}}>
                            {titleText}
                        </Typography>
                        <Typography component="div" style={{fontSize: 20, color: titleColor, fontWeight: 300}}>
                            {mottoText}
                        </Typography>
                        <Grid item flexGrow={1}>
                        </Grid>
                        <Typography component="div" style={{fontSize: 14, color: titleColor, fontWeight: 300}}>
                            surafelk27@gmail.com
                        </Typography>
                        <Typography component="div" style={{fontSize: 14, color: titleColor, fontWeight: 300}}>
                            +2519 42 85 97 23
                        </Typography>
                        <Typography component="div" style={{fontSize: 14, color: titleColor, fontWeight: 300}}>
                            Addis Ababa, Ethiopia
                        </Typography>

                    </Grid>

                    {colorPickerOn && (
                        <div ref={myRef}>
                            <HexColorPicker color={color}  onChange={(color) => {
                                if(colorPickerFor === 'title'){
                                    setTitleColor(color);
                                }else if(colorPickerFor === 'bg'){
                                    setColor(color);
                                }
                            }} />
                        </div>
                    )}

                </Grid>

                <br />

                <Grid container direction="row" width="100%">
                    <Grid container direction="column" xs={3}>

                        <h3> Background Color: </h3>

                        <Grid container alignItems="center">
                            <CircleIcon style={{color: color}}/>

                            <Button onClick={() => {
                                setColorPickerOn(true);
                                setColorPickerFor('bg');
                            }}>
                                {color}
                            </Button>
                        </Grid>

                        
                    </Grid>
                    <Grid container direction="column" xs={3}>

                        <h3> Title Color </h3>

                        <Grid container alignItems="center">
                            <CircleIcon style={{color: titleColor}}/>

                            <Button onClick={() => {
                                setColorPickerOn(true);
                                setColorPickerFor('title');
                            }}>
                                {titleColor}
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" xs={6} justifyContent="center">
                        <Grid item xs={4}>
                            <h4>Padding Top</h4>
                            <FormControl fullWidth>
                                <Select
                                    value={cpt}
                                    label="Age"
                                    onChange={(event) => {
                                        setCpt(event.target.value);
                                    }}>
                                        {getPaddingNumbers().map((val) => (
                                            <MenuItem value={val}>{val}</MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid container direction="row" xs={12} justifyContent="space-evenly">
                            
                            <Grid item xs={4}>
                                <h4>Padding Left</h4>
                                <FormControl fullWidth>
                                    {/* <InputLabel id="demo-simple-select-label">Padding Left</InputLabel> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={cpl}
                                        label="Age"
                                        onChange={(event) => {
                                            setCpl(event.target.value);
                                        }}>
                                            {getPaddingNumbers().map((val) => (
                                                <MenuItem value={val}>{val}</MenuItem>
                                            ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <h4>Padding Right</h4>
                                <FormControl fullWidth>
                                    {/* <InputLabel id="demo-simple-select-label">Padding Right</InputLabel> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={cpr}
                                        label="Age"
                                        onChange={(event) => {
                                            setCpr(event.target.value);
                                        }}>
                                            {getPaddingNumbers().map((val) => (
                                                <MenuItem value={val}>{val}</MenuItem>
                                            ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid item xs={4} marginBottom={2}>
                            <h4>Padding Bottom</h4>
                            <FormControl fullWidth>
                                {/* <InputLabel id="demo-simple-select-label">Padding Bottom</InputLabel> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={cpb}
                                    label="Age"
                                    onChange={(event) => {
                                        setCpb(event.target.value);
                                    }}>
                                        {getPaddingNumbers().map((val) => (
                                            <MenuItem value={val}>{val}</MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        
                    </Grid>
                </Grid>

                <Button onClick={() => console.log("Creating Card")}>
                    Create Card
                </Button>

            </Grid>
        </Grid>
    );
}

export default CreateCardPage;