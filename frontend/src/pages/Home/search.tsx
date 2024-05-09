//This file is created by "JINAY SHAH (B00928737)"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardActions, Grid } from '@mui/material';
import { isEmpty } from "utils/helpers";
import { GET } from "utils/axios";
import { useAppStore } from "store";

import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {POST} from 'utils/axios';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(true);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    department: '',
    experience: '',
    academicLevel: '',
  });

  
  const [state] = useAppStore();

  const handleCollaborateClick = (result: string) => {
    if (!isEmpty(state?.currentUser)) { 
      console.log(`Navigate to user portfolio: ${JSON.stringify(result)}`);
      navigate(`/my-projects/${result}`);
    } else {
      GET(`/api/collaboration/fetch_user?user_id=${result}`).then((response) => {
        console.log(response.data);
        const email = response.data.email;
        console.log("email: ", email);
  
        const subject = encodeURIComponent("Opportunity: Interview Inquiry");
         window.location.href = `mailto:${email}?subject=${subject}`;
       }).catch((error) => {
        console.log(error);
        navigate('/login');
      });
    }
  };

  const handlePortfolioClick = (result: string) => {
    console.log(`Navigate to user portfolio: ${JSON.stringify(result)}`);
    navigate(`/portfolio/${result}`)
  };
  
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await POST('api/search/portfolio', { search: '' });
        if (response && response.data && typeof(response.data) === 'object') {
          setFilteredResults(response.data.listOfDocuments);
        } else {
          console.error('Invalid data format:', response);
          setFilteredResults([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setFilteredResults([]);
      }
    };

    fetchInitialData();
  }, []);

  const calculateDurationInYears = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
  };

  const calculateTotalExperience = (experiences: any[]) => {
    return experiences.reduce((total, exp) => {
      const duration = calculateDurationInYears(exp.start_date, exp.end_date);
      return total + duration;
    }, 0);
  };

  const hasMasterDegree = (educations: any[]) => {
    return educations.some(education => education.degree.toLowerCase().includes('master'));
  };
  
  
  const handleSearchClick = async () => {
    setSearchPerformed(true);
    try {
      const response = await POST('api/search/portfolio', { search: searchQuery.trim() });
      if (response && response.data && typeof(response.data) === 'object') {
        let filteredDocuments = response.data.listOfDocuments;
        console.log(filteredDocuments);
        if (filters.department) {
          const departmentLower = filters.department.toLowerCase();
          filteredDocuments = filteredDocuments.filter((document: { education: any[]; }) => 
            document.education.some(education => 
              education.field_of_study.toLowerCase().includes(departmentLower)
            ));
          }
        
          if (filters.experience) {
            filteredDocuments = filteredDocuments.filter((document: { experience: any[]; }) => {
              const totalExperience = calculateTotalExperience(document.experience);
              switch (filters.experience) {
                case 'lessThanSixMonths':
                  return totalExperience < 0.5;
                case 'lessThanOneYear':
                  return totalExperience < 1;
                case 'lessThanTwoYears':
                  return totalExperience < 2;
                case 'twoToFiveYears':
                  return totalExperience >= 2 && totalExperience <= 5;
                case 'moreThanFiveYears':
                  return totalExperience > 5;
                default:
                  return false;
              }
            });
          }
          
          if (filters.academicLevel) {
            filteredDocuments = filteredDocuments.filter((document: { education: any[]; }) => {
              const isGraduate = hasMasterDegree(document.education);
              return (filters.academicLevel === 'graduate' && isGraduate) ||
                     (filters.academicLevel === 'undergraduate' && !isGraduate);
            });
          }
          
        setFilteredResults(filteredDocuments);
      } else {
        console.error('Invalid data format:', response);
        setFilteredResults([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setFilteredResults([]);
    }
  };
  
  const handleResetClick = () => {
    setSearchQuery('');
    setFilters({
      department: '',
      experience: '',
      academicLevel: '',
    });
    setFilteredResults([]);
    setSearchPerformed(false);
  };

  const navigate = useNavigate();

  const handleBackToHomeClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ padding: '20px', margin: '20px 0', textAlign: 'center' }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Department</InputLabel>
                <Select
                  value={filters.department}
                  onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                  label="Department"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Computer Science">Computer Science</MenuItem>
                  <MenuItem value="Health Sciences">Health Sciences</MenuItem>
                  <MenuItem value="Law">Law</MenuItem>
                  <MenuItem value="Business & Economics">Business & Economics</MenuItem>
                  <MenuItem value="Natural Science">Natural Sciences</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Experience</InputLabel>
                <Select
                  value={filters.experience}
                  onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                  label="Experience"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="lessThanSixMonths">Less than 6 months</MenuItem>
                  <MenuItem value="lessThanOneYear">Less than 1 year</MenuItem>
                  <MenuItem value="lessThanTwoYears">Less than 2 years</MenuItem>
                  <MenuItem value="twoToFiveYears">2 to 5 years</MenuItem>
                  <MenuItem value="moreThanFiveYears">More than 5 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Academic Level</InputLabel>
                <Select
                  value={filters.academicLevel}
                  onChange={(e) => setFilters({ ...filters, academicLevel: e.target.value })}
                  label="Academic Level"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="undergraduate">Undergraduate</MenuItem>
                  <MenuItem value="graduate">Graduate</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Box mr={1}>
            <Button variant="contained" color="primary" onClick={handleSearchClick}>
            Search
            </Button>
            </Box>
                <Box ml={1}>
                    <Button variant="contained" color="primary" onClick={handleResetClick}>
                    Reset
                    </Button>
                </Box>
            </Box>

          {searchPerformed && filteredResults.length > 0 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ color: '#ffd600', fontWeight: 'bold', marginBottom: '30px' }}>
                Search Results
              </Typography>
              {filteredResults.map((document, index) => (
                <Card key={index} sx={{ width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', '&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }, marginBottom: '20px' }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ color: '#ffd600', fontWeight: 'bold', textAlign: 'left' }}>
                    <strong>Profile:</strong> {document.configuration?.name || 'No Title'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Name:</strong> {document.bio?.first_name || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Email:</strong> {document.bio?.email || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Education:</strong> {document.education?.[0]?.field_of_study || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Degree:</strong> {document.education?.[0]?.degree || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Past Experience:</strong> {document.experience?.[0]?.role || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Skills:</strong> 
                    {document.skills.map((skill: { name: string }, id: number) => (
                    <span key={id}>{skill.name}{id !== document.skills.length - 1 ? ', ' : ''}</span>
                    ))}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handlePortfolioClick(document._id)}>Visit Portfolio</Button>
                  </CardActions>
                  <CardActions>
                    <Button size="small" onClick={() => handleCollaborateClick(document.user_id)}>Collaborate</Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          ) : (
            searchPerformed && <Typography sx={{ textAlign: 'center', color: 'red', marginTop: 2 }}>No results found.</Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button variant="contained" color="secondary" onClick={handleBackToHomeClick}>
              Back to Home Page
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
  
};

export default SearchPage;
