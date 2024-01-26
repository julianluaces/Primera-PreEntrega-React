import React from 'react'
import { Card, Image, Stack, Heading, Text, Button, ButtonGroup, CardHeader, CardBody, CardFooter, Spacer } from '@chakra-ui/react'

const Item = ({producto}) => {


  return (

<div className='producto'>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={producto.imagen} alt={producto.id}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{producto.titulo}</Heading>

      <Text py='2'>
        Stock disponible: {producto.stock}
      </Text>
      <Text py='2'>
        Precio: $ {producto.precio} .-
      </Text>

      
    </CardBody>

    <CardFooter>
      <Link className="ver-mas" to={`/item/${producto.id}`}>Ver Detalle</Link>
    </CardFooter>
  </Stack>
</Card>

</div>
    

  )
} 

export default Item