import React from 'react'
import styled from 'styled-components'
import swal from 'sweetalert2'


const Background = styled.div`
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to right, #525252, #3d72b4);
`

const Tulisan = styled.h1`
    font-size: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    color: white
`

function SuccessPage() {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Thank you for the donation'
    })
    return (
        <Background>
            <Tulisan>Thanks for Submitting</Tulisan>
        </Background>
    )
}

export default SuccessPage
