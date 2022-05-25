import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(5, 4, 3),
    },
  }));

const RSVP = () => {

    const [names, setNames ] = useState("");
    const [nameError, setNameError ] = useState("");


    const [email, setEmail ] = useState("");
    const [emailError, setEmailError ] = useState("");

    const [attend, setAttend ] = useState("");
    const [attendError, setAttendError ] = useState("");

    const [food, setFood ] = useState("");
    const [foodError, setFoodError ] = useState("");

    const [submitted, hasSubmit ] = useState(false);

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      hasSubmit(true)
    };

    function getModalStyle() {
        const top = 50 + Math.round(Math.random() * 20) - 10;

        const left = 50 + Math.round(Math.random() * 20) - 10;

        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }

    const validateForm = (e,name) => {
        console.log(names)
        let submission = []
        if(!names || names.length<5){
            setNameError('Full name/names please!')
            hasSubmit(false)
        }
        else{
            submission = ({
                names,
                email ,
                attend ,
                food ,
            })
            console.log(submission)
            handleOpen(
                hasSubmit(true)
            )
        }
    }

        return (
        <Fragment>

            <section className="story story-2 info section-info-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>RSVP</h2>
                            <p><b>Please RSVP by 1st June</b></p><br/><br/>
                       
                            <div id="wufoo-m1tru6as04jg1ii"> Fill out my <a href="https://kateandrhys.wufoo.com/forms/m1tru6as04jg1ii">online form</a>. </div> 
                    </div>
                    </div>
                </div>
            </section>

        </Fragment>

        )
    }

export default RSVP

/*
      <div className={'rsvpForm'}>
                                    <div class="form-group">
                                        <div className="left-panel">
                                            <label for="name">Name</label>
                                            <i class="material-icons">accessibility</i>
                                            { nameError && <label for="name">{nameError}</label>}
                                        </div>
                                        <div className="right-panel">
                                            <input type="text"  placeholder="Names" onChange={e => setNames(e.target.value )}onBlur={e => setNameError("")} />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div className="left-panel">
                                            <i class="material-icons">mail</i>
                                            <label for="name">Email</label>
                                            { nameError && <label for="name">{emailError}</label>}
                                        </div>
                                        <div className="right-panel">
                                            <input type="text"  placeholder="Email" 
                                            onChange={e => setEmail(e.target.value )}
                                            onBlur={e => setEmailError("")} />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                    <div className="left-panel">
                                        <i class="material-icons">done</i>
                                            <label for="name">Done</label>
                                            { attend && <label for="name">{attendError}</label>}
                                        </div>
                                        <select name="cars"
                                        onChange={e => setAttend(e.target.value )}
                                        onBlur={e => setAttendError("")}>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <i class="material-icons">restaurant</i>
                                        <label for="name">restaurant</label>
                                        { foodError && <label for="name">{foodError}</label>}
                                        <input type="text"  placeholder="Food reqs" 
                                        onChange={e => setFood(e.target.value )}
                                        onBlur={e => setFoodError("")} />
                                    </div>



                                    <button disabled={submitted} onClick={() => validateForm()}>
                                        Submit
                                    </button>
                        </div>
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={open}
                            onClose={handleClose}
                        >
                            <div style={modalStyle} className={classes.paper}>
                            <h3 id="simple-modal-title">Thank you</h3><br/>
                            <p id="simple-modal-description">
                                Cant wait to get married and celebrate with you!!!
                            </p>
                            </div>
                        </Modal>

*/