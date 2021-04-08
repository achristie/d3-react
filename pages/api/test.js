/**
 * @class       : test
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Tuesday Apr 06, 2021 17:41:27 EDT
 * @description : test
 */

const data = [
  { name: "Andrew", height: 173, gender: "male" },
  { name: "Jimmy", height: 180, gender: "male" },
  { name: "Deb", height: 160, gender: "female" },
  { name: "Taylor", height: 175, gender: "female" },
  { name: "Lorena", height: 178, gender: "female" },
  { name: "Jordan", height: 171, gender: "male" },
  { name: "Frank", height: 185, gender: "male" },
  { name: "Patrick", height: 181, gender: "male" },
  { name: "Kelly", height: 179, gender: "female" },
  { name: "Rocio", height: 173, gender: "female" },
  { name: "Sara", height: 163, gender: "female" },
];

export default (req, res) => {
  res.status(200).json(data);
};

