import React from "react";
import { MyGridItem } from "../../../../../Design/MyGrid";
import { MyHomeIcon } from "../../../../../Design/MyIcons";
import { MyTypography } from "../../../../../Design/MyTypography";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { AddressListStyles } from "../../CSS/AddressListStyles";
import { useMutation } from "@apollo/client";
import { DELETE_ADDRESS } from "../../../../../../queries/address/addressMutations";
import { GET_ALL_ADDRESS } from "../../../../../../queries/address/addressQueries";
import { IdleTransactionSpanRecorder } from "@sentry/tracing/dist/idletransaction";
import { Fragment } from "react";

const AddressList = ({ data, current, setCurrent, selectedAddress }) => {
  const classes = AddressListStyles();
  const {
    id,
    fullName,
    phoneNumber,
    pincode,
    state,
    city,
    HouseNo,
    area,
    landmark,
  } = data;

  const [deleteAddress, { data: deletedAddressData }] = useMutation(
    DELETE_ADDRESS,
    {
      onError: () => {},
    }
  );

  const onDeleteAddress = () => {
    deleteAddress({
      variables: {
        id,
      },
      update: (cache, { data: deletedAddressData }) => {
        const data = cache.readQuery({ query: GET_ALL_ADDRESS });
        // need to newData var because we need to add a
        // new instance of all data , we can not use data var direclty
        let dataToUpdate = data.getAllAddress;
        // filtering the data to delete given returned data
        dataToUpdate = dataToUpdate.filter((addressItem) => {
          return addressItem.id !== deletedAddressData.id;
        });

        cache.writeQuery({
          query: GET_ALL_ADDRESS,
          data: { ...data, getAllAddress: { dataToUpdate } },
        });
      },
    });
    setCurrent(null);
  };

  const AddressLabel = () => {
    return (
      <>
        <div className={classes.addressLabelDiv}>
          <div style={{ flexGrow: 1 }}>
            <div className={classes.addressDetails}>
              <MyTypography variant="h6" component="p">
                {fullName}
              </MyTypography>
              <MyTypography variant="body2" component="p">
                Address - {area},{city},{state}-{pincode}
              </MyTypography>
              <MyTypography variant="body2" component="p">
                Phone Number - {phoneNumber}
              </MyTypography>
            </div>
            <div className={classes.deliverHereBtnDiv}>
              {/* <MyButtonComponent
                variant="outlined"
                color="secondary"
                size="small"
                className={classes.deliverBtn}>
                Deliver Here
              </MyButtonComponent> */}
            </div>
          </div>
          <div>
            <MyButtonComponent
              onClick={() => {
                setCurrent(data);
                window.scroll({
                  top: document.body.offsetHeight,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              color="primary"
              className={classes.EditBtn}>
              Edit
            </MyButtonComponent>
            <MyButtonComponent
              onClick={onDeleteAddress}
              color="secondary"
              className={classes.EditBtn}>
              Delete
            </MyButtonComponent>
          </div>
        </div>
        <hr></hr>
      </>
    );
  };

  return (
    <>
      {/** Must compare with undefined because it checks wheither props passed or not
       *
       * Don't check with null
       */}
      {selectedAddress !== undefined ? (
        <FormControlLabel
          className={classes.root}
          value={id}
          control={<Radio />}
          label={<AddressLabel />}
        />
      ) : (
        <div>
          <div className={classes.root} />
          <AddressLabel />
        </div>
      )}
    </>
  );
};

export default AddressList;
