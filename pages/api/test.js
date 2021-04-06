/**
 * @class       : test
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Tuesday Apr 06, 2021 17:41:27 EDT
 * @description : test
 */

const data = [
  { name: "Andrew", height: 173 },
  { name: "Jimmy", height: 180 },
  { name: "Deb", height: 160 },
  { name: "Taylor", height: 175 },
  { name: "Lorena", height: 178 },
];

export default (req, res) => {
  res.status(200).json(data);
};

