import React from 'react'
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ProductDetail = ({product}) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));

  const SmallText = styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    & > p{
        font-size:14px;
        line-height:2.5;
    }
  `
  const StyledIcon = styled(LocalOfferIcon)`
  margin-right:10px;
  color:#00CC00;
  font-size:15px;
  `

  const ColumnText = styled(TableRow)`
  font-size:14px;
  vertical-align:baseline;
  & > td {
    font-size:14px;
    margin-top:10px;
    border:none;
  }
  `
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:5, color:'#878787', fontSize:14, display:'flex'}}>
               8 Ratings 1 & Reviews
              <Box component="span">
                <img src={fassured} alt="" style={{width:77, marginLeft:20}}/>
              </Box>
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available offers</Typography>
            <SmallText>
            <Typography><StyledIcon/>Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999T&C</Typography>
            <Typography><StyledIcon/>Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999T&C</Typography>
            <Typography><StyledIcon/>Bank OfferFlat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of ₹50,000 and aboveT&C</Typography>
            <Typography><StyledIcon/>Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C</Typography>
            <Typography><StyledIcon/>Bank OfferPrepaid Off ₹2000 On Selected BankT&C</Typography>
            <Typography><StyledIcon/>Partner OfferApply & get ₹10,000 Times Prime benefits + ₹1,000 Gift Card* with Flipkart Axis Bank Credit Card</Typography>
            <Typography><StyledIcon/>5% Cashback on Flipkart Axis Bank Card</Typography>
            <Typography><StyledIcon/>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600,}}>Delivery by {date.toDateString()} ₹50</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Warrenty</TableCell>
                        <TableCell>No warrenty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Typography style={{color:'#2874f0'}}>SuperComNet</Typography>
                            <Typography>GST invoice available</Typography>
                            <Typography>View More Seller starting from ₹ {product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}><img src={adURL} alt="" style={{width:390}}/></TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell>Description</TableCell>
                        <TableCell colSpan={2}>{product.description}</TableCell>
                    </ColumnText>
                    
                </TableBody>
            </Table>
    </>
  )
}

export default ProductDetail
