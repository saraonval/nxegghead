import React, { useEffect, useState } from 'react';

import './app.module.scss';

import { Header } from '@nxegghead/store/ui-shared';
import { formatRating } from '@nxegghead/store/util-formatters';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Route, Link, useHistory } from 'react-router-dom';

import { StoreFeatureProductDetail } from '@nxegghead/store/feature-product-detail';
import { Product } from '@nxegghead/api/util-interfaces';

export function App() {
  const myStyle = {
    height: '140px',
  };
  const history = useHistory();

  const [state, setState] = useState<{
    data: Product[];
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: [],
    loadingState: 'success',
  });

  useEffect(() => {
    setState((s) => ({ ...s, loadingState: 'loading' }));
    fetch('api/products')
      .then((x) => x.json())
      .then((res) => {
        setState((s) => ({
          ...s,
          data: res,
          loadingState: 'success',
        }));
      })
      .catch((err) => {
        setState((s) => ({
          ...s,
          loadingState: 'error',
        }));
      });
  }, []);

  return (
    <>
      <Header title="Products" />
      <div className="container" data-testid="app-container">
        <div className="products-layout">
          {state.loadingState === 'loading'
            ? 'Loading…'
            : state.loadingState === 'error'
            ? '<div>Error retrieving data</div>'
            : state.data.map((x) => (
                <Card
                  key={x.id}
                  className="product-card"
                  onClick={() => history.push(`/product/${x.id}`)}
                >
                  <CardActionArea>
                    {/* <CardMedia
                className="product-card-media"
                image={x.image}
                title={x.name}
              /> */}
                    <img src={x.image} alt={x.name} style={myStyle} />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {x.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className="product-details"
                      >
                        {x.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className="product-ranking"
                      >
                        <strong>Rating:</strong> {formatRating(x.rating)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
        </div>
      </div>
      <Route path="/product/:id" component={StoreFeatureProductDetail} />
    </>
  );
}

export default App;
