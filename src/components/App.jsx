// импорт масива данных для разметки (для пропсов)
import user from '../json/user.json';
import data from '../json/data.json';
// импорт функции разметки
import Section from './Section/Section';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
        <Statistics title="UPLOAD STATS" stats={data} />
      </Section>
    </div>
  );
};
