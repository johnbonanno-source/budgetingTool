import React from 'react';
import Grid from '@mui/material/Grid';
import styles from './GridComponent.module.css'; // Import the CSS Module

function GridComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} className={styles.gridItem1}>
        {/* Content for the first column */}
      </Grid>
      <Grid item xs={4} className={styles.gridItem2}>
        {/* Content for the second column */}
      </Grid>
      <Grid item xs={4} className={styles.gridItem3}>
        {/* Content for the third column */}
      </Grid>
      <Grid item xs={4} className={styles.gridItem4}>
        {/* Content for the fourth column */}
      </Grid>
      <Grid item xs={4} className={styles.gridItem5}>
        {/* Content for the fifth column */}
      </Grid>
      <Grid item xs={4} className={styles.gridItem6}>
        {/* Content for the sixth column */}
      </Grid>
      <Grid item xs={4} className={styles.gridItem7}>
        {/* Content for the seventh column */}
      </Grid>
      <Grid item xs={4} className={styles.gridItem8}>
        {/* Content for the eighth column */}
      </Grid>
    </Grid>
  );
}

export default GridComponent;
