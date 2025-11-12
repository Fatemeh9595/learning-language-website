import { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function FeedBackForm() {
  const [validated, setValidated] = useState(false);
  const [names, setNames] = useState([]);
  const [newNames, setNewNames] = useState("");
  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState("");

  // Access localStorage safely and make the reference stable
  const storage = typeof window !== "undefined" ? window.localStorage : null;

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const isValid = form.checkValidity();
    setValidated(true);
    if (!isValid) return;

    // use controlled values
    setNames((prev) => [...prev, { id: prev.length + 1, name: newNames.trim() }]);
    setComments((prev) => [...prev, { comment: newComments.trim() }]);

    // clear inputs
    setNewNames("");
    setNewComments("");
  };

  // Load from localStorage on mount (and if storage object changes)
  useEffect(() => {
    if (!storage) return;
    const savedNames = storage.getItem("names");
    const savedComments = storage.getItem("comments");
    if (savedNames) setNames(JSON.parse(savedNames));
    if (savedComments) setComments(JSON.parse(savedComments));
  }, [storage]);

  // Save when names or comments change
  useEffect(() => {
    if (!storage) return;
    storage.setItem("names", JSON.stringify(names));
    storage.setItem("comments", JSON.stringify(comments));
  }, [names, comments, storage]);

  // stable renderer for list rows (optional)
  const renderRow = useCallback(
    (name, i) => (
      <ListGroup key={name.id}>
        <ListGroupItem className="mb-2 m-auto" style={{ width: "500px" }}>
          {`${name.id} - ${name.name} : ${comments[i]?.comment ?? ""}`}
        </ListGroupItem>
      </ListGroup>
    ),
    [comments]
  );

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-center">
        <Form.Group as={Col} md="4" controlId="validationCustomName" className="m-auto">
          <Form.Label>Name</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              aria-describedby="inputGroupPrepend"
              required
              name="name"
              value={newNames}
              onChange={(e) => setNewNames(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Please write your Name.</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomComment" className="m-auto">
          <Form.Label>Comment</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              style={{ height: "200px", width: "500px" }}
              as="textarea"
              aria-describedby="inputGroupPrepend"
              required
              name="comment"
              value={newComments}
              onChange={(e) => setNewComments(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Please write your Comment.</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>

      <Form className="text-center">
        {names.map((name, i) => renderRow(name, i))}
      </Form>
    </>
  );
}

export default FeedBackForm;
