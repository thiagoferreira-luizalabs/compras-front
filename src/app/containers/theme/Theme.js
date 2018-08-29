import React from 'react';

export default () => (
  <div className="">
    <div className="ui three column stackable grid">
      <div className="column">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
      </div>
      <div className="column">
        <h2>Example body text</h2>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
        <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
        <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
      </div>
      <div className="column">
        <div className="ui three column stackable padded middle aligned centered color grid">
          <div className="red column">Red</div>
          <div className="orange column">Orange</div>
          <div className="yellow column">Yellow</div>
          <div className="olive column">Olive</div>
          <div className="green column">Green</div>
          <div className="teal column">Teal</div>
          <div className="blue column">Blue</div>
          <div className="violet column">Violet</div>
          <div className="purple column">Purple</div>
          <div className="pink column">Pink</div>
          <div className="brown column">Brown</div>
          <div className="grey column">Grey</div>
          <div className="black column">Black</div>
        </div>
      </div>
    </div>

    <div className="ui stackable equal width grid">
      <div className="column">
        <button className="ui button">Default</button>
        <button className="ui primary button">Primary</button>
        <button className="ui secondary button">Secondary</button>
        <button className="ui basic button">Basic</button>
        <button className="ui compact button">
          Compact
    </button>

        <div className="ui divider"></div>
        <button className="ui icon button">
          <i className="heart icon"></i>
        </button>
        <button className="ui labeled icon button">
          <i className="heart icon"></i>
          Labeled
    </button>
        <button className="ui right labeled icon button">
          <i className="heart icon"></i>
          Labeled
    </button>

        <div className="ui divider"></div>

        <div className="ui buttons">
          <button className="ui button">Combo</button>
          <div className="ui floating dropdown icon button">
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item">Choice 1</div>
              <div className="item">Choice 2</div>
              <div className="item">Choice 3</div>
            </div>
          </div>
        </div>

        <div className="ui floating search dropdown button">
          <span className="text">Search Dropdown</span>
          <div className="menu">
            <div className="item">Arabic</div>
            <div className="item">Chinese</div>
            <div className="item">Danish</div>
            <div className="item">Dutch</div>
            <div className="item">English</div>
            <div className="item">French</div>
            <div className="item">German</div>
            <div className="item">Greek</div>
            <div className="item">Hungarian</div>
            <div className="item">Italian</div>
            <div className="item">Japanese</div>
            <div className="item">Korean</div>
            <div className="item">Lithuanian</div>
            <div className="item">Persian</div>
            <div className="item">Polish</div>
            <div className="item">Portuguese</div>
            <div className="item">Russian</div>
            <div className="item">Spanish</div>
            <div className="item">Swedish</div>
            <div className="item">Turkish</div>
            <div className="item">Vietnamese</div>
          </div>
        </div>

        <div className="ui divider"></div>

        <div className="ui animated button" >
          <div className="visible content">Horizontal</div>
          <div className="hidden content">
            Hidden
      </div>
        </div>
        <div className="ui vertical animated button" >
          <div className="visible content">Vertical</div>
          <div className="hidden content">
            Hidden
      </div>
        </div>
        <div className="ui animated fade button" >
          <div className="visible content">Fade In</div>
          <div className="hidden content">
            Hidden
      </div>
        </div>

        <div className="ui divider"></div>
        <button className="ui disabled button">Disabled</button>
        <button className="ui loading button">Loading</button>

        <div className="ui divider"></div>

        <div className="ui buttons">
          <button className="ui button">1</button>
          <button className="ui button">2</button>
          <button className="ui button">3</button>
        </div>

        <div className="ui icon buttons">
          <button className="ui button"><i className="align left icon"></i></button>
          <button className="ui button"><i className="align center icon"></i></button>
          <button className="ui button"><i className="align right icon"></i></button>
          <button className="ui button"><i className="align justify icon"></i></button>
        </div>

        <div className="ui buttons">
          <button className="ui button">1</button>
          <div className="or"></div>
          <button className="ui button">2</button>
        </div>

        <div className="ui divider"></div>

        <div className="ui two top attached buttons">
          <div className="ui button">One</div>
          <div className="ui button">Two</div>
        </div>
        <div className="ui attached segment">
        </div>
        <div className="ui two bottom attached buttons">
          <div className="ui button">One</div>
          <div className="ui button">Two</div>
        </div>

      </div>
      <div className="column">
        <button className="ui mini button">Mini</button>
        <button className="ui tiny button">Tiny</button>
        <button className="ui small button">Small</button>
        <button className="ui large button">Large</button>
        <button className="ui big button">Big</button>
        <button className="ui huge button">Huge</button>
        <button className="ui massive button">Massive</button>
        <div className="ui divider"></div>
        <div className="spaced">
          <button className="yellow ui button">Yellow</button>
          <button className="orange ui button">Orange</button>
          <button className="green ui button">Green</button>
          <button className="teal ui button">Teal</button>
          <button className="blue ui button">Blue</button>
          <button className="purple ui button">Purple</button>
          <button className="pink ui button">Pink</button>
          <button className="red ui button">Red</button>
          <button className="black ui button">Black</button>
        </div>


        <div className="ui divider"></div>

        <div className="ui inverted segment">
          <button className="ui inverted button">Inverted</button>
          <button className="ui inverted basic button">Basic</button>
          <button className="ui inverted blue button">Colored</button>
          <button className="ui inverted blue basic button">Basic Colored</button>
        </div>

      </div>
    </div>

  </div>
)

