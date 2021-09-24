import Molloy from "../Images/molloy.png";

function mainpage() {
  return (
    <div>
      <h1> Hello there! My name is Maria Reccoppa :)</h1>
      <h2> About me: </h2>
      <p>
        I am a sophomore currently studying Computer Information Sytsems at
        Molloy College!
        <p>
          <img src={Molloy} />
        </p>
      </p>
      <h3> My hobbies include... </h3>
      <ul>
        <li> Playing video games </li>
        <li> Coding </li>
        <li> Learning computer software </li>
        <li> Animation </li>
        <li>
          Drawing{" "}
          <a href="/Main/Drawingpage/Drawingpage.html">
            {" "}
            (Click here to see one of my drawings!){" "}
          </a>
        </li>
      </ul>
      <h3> What I'm working on... </h3>
      <p>
        I am studying to obtain my MOS certification in Excel this semester. I
        also would love to learn Python and get PCAP certified on my own time!
      </p>
      <p>
        I am also teaching myself software such as Maya and Blender. My goal is
        to be able to produce basic renders of objects.
      </p>
      <h2> What has coding taught me? (so far) </h2>
      <p>
        Coding has taught me to continue pushing through my problems no matter
        what. There is always a solution for everything!
      </p>
      <blockquote>"You didn't come this far to only come this far."</blockquote>
      <h3> What inspired me to love coding? </h3>
      <p>
        I started using my parents computer when I was only 5 years old! I
        always loved changing the small settings in their computer to see what
        would happen. I was very curious as a child and I would constantly ask
        my dad about the quickly changing technology I saw around me. As I got
        older, I would help my parents with minor computer problems they had,
        and I realized I enjoyed it very much! I also used to hack Nintendo
        consoles with my brother, we both installed{" "}
        <a href="https://en.wikipedia.org/wiki/Homebrew_(video_games)#Wii">
          Homebrew
        </a>{" "}
        software onto the Wii we used to use all the time. Wondering how these
        hacks worked and how people were able to write the code for them got me
        even more curious! Ever since then I have always been interested in
        computers and technology.
      </p>
      <h2>
        I started coding this website on 9.10.21. I am excited to see how far it
        will come!
      </h2>
      <a href="https://github.com/mariareccoppa" target="_blank">
        My GitHub
      </a>

      <p>&copy; Maria Reccoppa, 2021 </p>
    </div>
  );
}

export default mainpage;
