import React from 'react'
import { Alert } from 'react-bootstrap'

export default function NotFound() {
    return (
<div>
        <Alert className="my-3" variant="danger">
            Pagina non trovata!
        </Alert>
</div>
    )
}
