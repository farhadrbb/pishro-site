import AxiosCustom from "../../../components/common/apiConfig";

export const contactUs_insert = (item) => {
  let config = {
    url: "insert_request",
  };

  let data = {
    table: "contactus",
    method_type: "insert",
    data: {
      ...item,
    },
  };
  return AxiosCustom(config, data);
};
