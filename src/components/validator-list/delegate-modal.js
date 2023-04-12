import { Modal, Typography, Box, Button, Alert, LinearProgress, TextField, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/store";
import { delegate, renderBalance } from "../../utils/cosmos";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const DelegateModal = ({ open, validator, handleClose }) => {
  const [state, dispatch] = useContext(GlobalContext);

  const [delegation, setDelegation] = useState(0);
  const [mibSupport, setMibSupport] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleDelegate = async () => {
    let delegationAmount = parseFloat(delegation) * 1000000;
    setLoading(true);

    try {
      const res = await delegate(
        state.chain,
        state.signingClient,
        state.address,
        validator.address,
        delegationAmount,
        mibSupport
      );

      if (!res || res.code !== 0) {
        dispatch({
          type: "SET_MESSAGE",
          payload: {
            message: `There was an error processing your tx. ${res.rawLog}`,
            severity: "error",
          },
        });
      } else {
        dispatch({
          type: "SET_MESSAGE",
          payload: {
            message: `Transaction successfully broadcasted! Hash: ${res.transactionHash}`,
            severity: "success",
          },
        });
      }
    } catch (error) {
      dispatch({
        type: "SET_MESSAGE",
        payload: {
          message: `${error}`,
          severity: "error",
        },
      });

      console.log(error);
    }

    resetModalAndClose();
  };

  let resetModalAndClose = () => {
    setLoading(false);
    setMibSupport(false)
    setDelegation(0)
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={resetModalAndClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mb: 2 }}
        >
          Delegate to {validator.name}
        </Typography>
        {state.address ?
          <>
            <Typography
              id="modal-modal-description"
              variant="subtitle1"
              sx={{ mb: 2 }}
            >
              <b>Your Balance:</b> {renderBalance(state.chain, state.balance)}
            </Typography>
            <TextField
              id="outlined-required"
              label="Delegation Amount"
              fullWidth
              value={delegation}
              onChange={(e) => setDelegation(e.target.value)}
              sx={{ mb: 2 }}
            />
            {state.chain.mib && state.chain.mib !== validator.address && (
              <FormGroup>
              <FormControlLabel control={<Checkbox onChange={(e) => setMibSupport(e.target.checked)} />} label="Delegate 20% to MiB to show your support ❤️" />
            </FormGroup>
            )}
            
            <Button
              variant="contained"
              disabled={loading}
              onClick={() => {
                handleDelegate();
              }}
            >
              Delegate
            </Button>
            {loading && <LinearProgress sx={{ mt: 2 }} />}
          </>
          :
          <Alert severity="error">Please connect your wallet!</Alert>
        }
      </Box>
    </Modal>
  );
};

export default DelegateModal;
