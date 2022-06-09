export default function helloAPO(req, res) {
  res.status(200).json({ message: "Hello API!" });
}