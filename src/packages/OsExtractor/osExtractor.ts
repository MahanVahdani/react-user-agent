import  Bowser from 'bowser';

const osExtractor = (user_agent: string) => {
  const agentDetails = Bowser.getParser(user_agent);

  const operatingSystemDetail = agentDetails.getOS()
    
  return operatingSystemDetail;
};

export default osExtractor;
