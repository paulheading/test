
interface Graph {
  color?: string
}

export const Graph: React.FC<Graph> = ({ color }) => {
  const fill = color ? color : '#FFF';
  return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="222" height="40" viewBox="0 0 222 40"><path d="M204.5,10.5L217,5v33H1v-4l51.5-6.5h21l26-1l10-3	l13-9l22-1l12-2l12-5l15,4H204.5z" opacity="0.2" fillRule="evenodd" clipRule="evenodd" fill={fill} /><path d="M217,5l-12.5,5.5h-21l-6-1l-9-3l-12,5l-12,2l-22,1l-13,9l-10,3	l-26,1h-21L1,34" fill="none" stroke={fill} strokeMiterlimit="10"/><circle cx="217" cy="5" r="3.3"/><path d="M217,2.3c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7s-2.7-1.2-2.7-2.7S215.5,2.3,217,2.3 M217,1	c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S219.2,1,217,1L217,1z" fill={fill} /><path d="M217,38H1" fill="none" stroke={fill} strokeMiterlimit="10"/></svg>;
}

