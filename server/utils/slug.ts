function slug(str: string, separator = "-") {
  return str.toLowerCase().split(" ").join(separator);
}

/*====================*/

export default slug;
