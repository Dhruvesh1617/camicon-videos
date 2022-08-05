export function checkItem(array,_id) {
    return array?.videoItems?.find((item) => item._id ===_id)
  }