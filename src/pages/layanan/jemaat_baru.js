import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function jemaat_baru(){
    return (
        <section>
            <h1> Selamat datang di halaman Pendaftaran Jemaat Baru</h1>
            <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalnama" style={{ padding: '8px', margin: '1px'}}>
        <Form.Label column sm={2}>
          Nama Lengkap
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="nama" placeholder="Nama" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalttd" style={{ padding: '8px'}}>
        <Form.Label column sm={2}>
          Tempat Tanggal Lahir
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="ttd" placeholder="TTD" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalalamat" style={{ padding: '8px'}}>
        <Form.Label column sm={2}>
          Alamat
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="alamat" placeholder="Alamat" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalnohp">
        <Form.Label column sm={2}>
          No HP
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="nohp" placeholder="No HP" />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Jemaat Baru atau Pindahan?
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Jemaat Baru"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Pindahan"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalasalgereja" style={{ padding: '8px'}}>
        <Form.Label column sm={2}>
          Gereja Asal
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="gerejaasal" placeholder="Strip jika tidak ada" />
        </Col>
      </Form.Group>

        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Selesai mengisi" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" >Simpan</Button>
        </Col>
      </Form.Group>
    </Form>
        </section>
        
    )
}
