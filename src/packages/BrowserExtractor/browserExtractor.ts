import  Bowser from 'bowser';

const browserExtractor = (user_agent: string) => {
  const agentDetails = Bowser.getParser(user_agent);

  const BrowserDetail = agentDetails.getBrowser()
  
  return BrowserDetail;
};

export default browserExtractor;
