import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Rahul_CV_dev.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle style={{ position: 'fixed', zIndex: 0, pointerEvents: 'none' }} />
        <Row style={{ justifyContent: "center", position: "relative", zIndex: 2 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            options={{
              cMapUrl: 'cmaps/',
              cMapPacked: true,
              enableAnnotationRendering: true
            }}
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.0 : 0.6}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              renderInteractiveForms={true}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", zIndex: 2 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}


export default ResumeNew