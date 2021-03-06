import {
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

import firebaseDB from "../../firebase";

import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// Dialog
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function Warehouse() {
  // View
  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("Warehouse")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setData({
            ...snapshot.val(),
          });
      });
  }, []);

  const onDelete = (id) => {
    firebaseDB
      .database()
      .ref()
      .child(`Warehouse/${id}`)
      .remove((err) => {
        if (err) {
          console.log(err);
        } else {
          alert("Xóa kho thành công");
        }
      });
  };

  function testConfirmDialog(id) {
    // eslint-disable-next-line no-restricted-globals
    var result = confirm("Bạn có muốn thực hiện thao tác này?");

    if (result) {
      onDelete(id);
    } else {
      alert("Đã hủy!");
    }
  }

  // Dialog Detail
  function ViewDialog({ propsId, propsData }) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };

    return (
      <div>
        <IconButton>
          <RemoveRedEyeIcon onClick={handleClickOpen} />
        </IconButton>
        <Dialog
          fullWidth
          maxWidth="sm"
          open={open}
          scroll="body"
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Thông tin chi tiết</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  src={propsData[propsId].warehouseImage}
                  variant="square"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Link hình"
                  value={propsData[propsId].warehouseImage}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mã kho"
                  value={propsData[propsId].warehouseId}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Tên kho"
                  value={propsData[propsId].warehouseName}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Ngày cập nhật"
                  value={propsData[propsId].dateCreate}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Tên người tạo"
                  value={propsData[propsId].createName}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Danh sách các nguyên liệu trong kho:</b>
                </Typography>
                {propsData[propsId].warehouseMaterial?.map((item, index) => {
                  const key = index;
                  return (
                    <React.Fragment key={key}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <TextField
                            disabled
                            size="small"
                            fullWidth
                            defaultValue={Object.keys(item)}
                          />
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <TextField
                            disabled
                            size="small"
                            fullWidth
                            defaultValue={Object.values(item)}
                          />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  );
                })}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Xác nhận
            </Button>
            <Button onClick={handleClose} autoFocus>
              Đóng
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  // Dialog Edit
  function ViewDialogEdit({ propsId, propsData }) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };

    const [values, setValues] = useState({
      dateCreate: new Date().toString(),
    });

    var obj1 = propsData[propsId];

    useEffect(() => {
      Object.assign(obj1, { dateCreate: new Date().toString() });
      setValues(obj1);
    }, [obj1]);

    const handleChangeEdit = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };

    const addOrEdit = (obj) => {
      if (propsId === "") {
        firebaseDB.child("Warehouse").push(obj, (err) => {
          if (err) {
            console.log(err);
          }
        });
      } else {
        firebaseDB
          .database()
          .ref()
          .child(`Warehouse/${propsId}`)
          .set(obj, (err) => {
            if (err) {
              console.log(err);
            } else {
              alert("Cập nhật thành công");
            }
          });
      }
    };

    console.log(values);

    // Submit
    const handleSubmit = (e) => {
      addOrEdit(values);
    };

    return (
      <div>
        <IconButton>
          <EditIcon onClick={handleClickOpen} />
        </IconButton>
        <Dialog
          fullWidth
          maxWidth="sm"
          open={open}
          scroll="body"
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Chỉnh sửa</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  src={obj1?.warehouseImage}
                  variant="square"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Link hình"
                  defaultValue={obj1?.warehouseImage}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="warehouseImage"
                  onChange={handleChangeEdit}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Tên kho"
                  defaultValue={obj1?.warehouseName}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="warehouseName"
                  onChange={handleChangeEdit}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Địa chỉ kho"
                  defaultValue={obj1?.warehouseAddress}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="createName"
                  onChange={handleChangeEdit}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} color="primary">
              Xác nhận
            </Button>
            <Button onClick={handleClose} autoFocus>
              Đóng
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h6">Danh sách kho</Typography>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell align="right">Mã kho</TableCell>
              <TableCell align="right">Tên kho</TableCell>
              <TableCell align="right">Địa chỉ</TableCell>
              <TableCell align="right">Chức năng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(data)
              .reverse()
              .map((id, index) => {
                const key = index;
                return (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {key + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <CardMedia
                        component="img"
                        image={data[id].warehouseImage}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {data[id].warehouseId}
                    </TableCell>
                    <TableCell align="right">
                      {data[id].warehouseName}
                    </TableCell>
                    <TableCell align="right">
                      {data[id].warehouseAddress}
                    </TableCell>
                    <TableCell>
                      <Grid container justify="flex-end">
                        <Grid item>
                          <ViewDialog propsId={id} propsData={data} />
                        </Grid>
                        <Grid item>
                          <ViewDialogEdit propsId={id} propsData={data} />
                        </Grid>
                        <Grid item>
                          <IconButton
                            onClick={() => {
                              testConfirmDialog(id);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Warehouse;
