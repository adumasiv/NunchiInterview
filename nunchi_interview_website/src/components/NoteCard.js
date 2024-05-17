import { Container, Box, Grid } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import imageUrl from '/Users/averyiv/git/NunchiInterview/nunchi_interview_website/src/pictures/AdobeStock_219633151.jpeg';
import imageUrl2 from '/Users/averyiv/git/NunchiInterview/nunchi_interview_website/src/pictures/AdobeStock_213793387.jpeg';
import imageUrl3 from '/Users/averyiv/git/NunchiInterview/nunchi_interview_website/src/pictures/AdobeStock_279788359.jpeg';
import avatarImage from '/Users/averyiv/git/NunchiInterview/nunchi_interview_website/src/pictures/Avatar Icon.png';
import buttonImage from '/Users/averyiv/git/NunchiInterview/nunchi_interview_website/src/pictures/OptionsButton.png';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function NoteCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Container variant="outlined" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>{/* Container that holds the card component*/}
      <Box> 
        <Card sx={{ maxWidth: 600, borderRadius: 8 }}> {/* Main card component */}
          <CardHeader 
            avatar={
              <Avatar src={avatarImage} aria-label="Avatar icon" /> 
            }
            action={
              <IconButton aria-label="settings">
                <img src={buttonImage} alt="settings" style={{ width: 24, height: 24 }} />
              </IconButton>
            }
            title={
              <Box display="flex" alignItems="center">
                <Typography variant="h5">Memberships Expiring:</Typography>
                <Typography variant="h4" sx={{ marginLeft: 1, fontWeight: 'bold' }}>5</Typography>
              </Box>
            }
          />
          <Divider variant="middle" />
          <Grid container> {/* First Container that holds the first row of elements */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}> {/* Box for the left side of the first contianer */}
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100, objectFit: 'cover'}}
                  image={imageUrl}
                  alt="Profile Picture"
                />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Barry L.</Typography>
                  <Typography variant="subtitle2" color="red"  sx={{ fontWeight: 'bold' }}>
                    Expires in 2 day
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}> {/* Box for the right side of the first contianer */}
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    #product, photography, healthcare, MI angel, newyork, startups, fintech
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
          <Grid container> {/* Second container that holds the second row of elements*/}
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}> {/* Box for the left side of the second contianer */}
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100, objectFit: 'cover'}}
                  image={imageUrl2}
                  alt="Profile Picture"
                />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Ian B.</Typography>
                  <Typography variant="subtitle2" color="red"  sx={{ fontWeight: 'bold' }}>
                    Expires in 3 day
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}> {/* Box for the right side of the second contianer */}
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    #innovation, businessstrategy, healthcare, chicago, techstartups, design
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
          <Grid container> {/* Third Container that holds the third row of elements */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}> {/* Box for the left side of the third contianer */}
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100, objectFit: 'cover'}}
                  image={imageUrl3}
                  alt="Profile Picture"
                />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Lisa M.</Typography>
                  <Typography variant="subtitle2" color="red"  sx={{ fontWeight: 'bold' }}>
                    Expires in 3 day
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}> {/* Box for the right side of the third contianer */}
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    #founder, angel, teamlead, OH, innovator, tech, marketing, dev
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
}

export default NoteCard;
