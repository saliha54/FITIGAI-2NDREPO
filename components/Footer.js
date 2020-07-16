let socialMedia = ['twitter', 'facebook', 'instagram', 'linkedin'];
let languages = ['TUR', 'ENG', 'DUT', 'FRA', 'ARA'];

const Footer = () => (
  <footer className='footer'>
    <div className='languageSelection'>
      <select name='languages' className='langugaes footerOptions'>
        {languages.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
    <div className='socialMediaLinks'>
      {socialMedia.map((item, key) => (
        <a key={key} href='#' className='socialMediaLink'>
          <img
            className='socialMediaIcons footerOptions'
            alt={`${item} Link`}
            src={`/images/${item}.svg`}
          />
        </a>
      ))}
    </div>
    <style jsx>
      {`
        .footer {
          background: #151b8d;
          //margin-top: 10px;
          height: 5rem;
        }
      `}
    </style>
  </footer>
);

export default Footer;
