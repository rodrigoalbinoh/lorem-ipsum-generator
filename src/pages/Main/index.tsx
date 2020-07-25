import React, { useState, FormEvent } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import parse from 'html-react-parser';
import { FiInbox } from 'react-icons/fi'

import { Container, Sidebar, Form, Content, ContentHeader, ContentText } from './styles';

import Header from '../../components/Header';

const Main: React.FC = () => {
  const [lorem, setLorem] = useState('');
  const [paragraphs, setParagraphs] = useState(0);

  const handleGenerateText = ( event: FormEvent<HTMLFormElement>,) => {
    event.preventDefault();
    const lipsum = new LoremIpsum({
      random: Math.random,
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    }, 'html');
    const generatedText = lipsum.generateParagraphs(paragraphs);
    

    setLorem(generatedText);

    setParagraphs(0);
  }

  return (
    <>
    <Header />
    <Container>
      <Sidebar>
        <p>Configurações do texto</p>
        <Form onSubmit={handleGenerateText}>
          <input 
            onChange={(e) => setParagraphs(parseInt(e.target.value))}
            placeholder="Digite a quantidade de parágrafos"
          />

          <button type="submit">Gerar texto</button>
        </Form>
      </Sidebar>
      <Content>
        <ContentHeader>
          <h1>Texto Gerado:</h1>
        </ContentHeader>
        <ContentText>
          {lorem ? parse(lorem) : 
          <div>
            <FiInbox />
            <p>Parece que você ainda não gerou um texto</p>
          </div>}
        </ContentText>
      </Content>
    </Container>
    </>
  )
}

export default Main;