import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "shards-react";

const BlogOverview = () => {
  return (
    <div>
      <Card className="m-5">
        <CardHeader>
          <h6 className="m-0">Card header</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">Hello world</CardBody>
        <CardFooter className="border-top text-center">
          <button className="btn btn-primary">Save</button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogOverview;
