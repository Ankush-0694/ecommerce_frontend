import React from "react";
import { MyTypography } from "../../../../../Design/MyTypography";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { AddressListStyles } from "../../CSS/AddressListStyles";
import { useMutation } from "@apollo/client";
import { DELETE_ADDRESS } from "../../../../../../queries/address/addressMutations";
import { GET_ADDRESSES_BY_CUSTOMERID } from "../../../../../../queries/address/addressQueries";

const AddressList = ({ addressData, current, setCurrent, selectedAddress }) => {
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
  } = addressData;

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
        const data = cache.readQuery({ query: GET_ADDRESSES_BY_CUSTOMERID });
        // need to newData var because we need to add a
        // new instance of all data , we can not use data var direclty
        let dataToUpdate = data.getAddressesByCustomerId;
        // filtering the data to delete given returned data
        dataToUpdate = dataToUpdate.filter((addressItem) => {
          return addressItem.id !== deletedAddressData.id;
        });

        cache.writeQuery({
          query: GET_ADDRESSES_BY_CUSTOMERID,
          data: { ...data, getAddressesByCustomerId: { dataToUpdate } },
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
                setCurrent(addressData);
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
