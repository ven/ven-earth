import { MainLayout } from 'layouts/MainLayout'
import { v4 as uuidv4 } from 'uuid'
import { AnimeData } from 'data/anime'
import { AnimeCard } from 'components/AnimeCard'

const Anime = () => {
  return (
    <MainLayout title="Anime" description="A collection of my favourite anime.">
      <div className="grid gap-6">
        {AnimeData.map((anime) => (
          <AnimeCard
            key={uuidv4()}
            title={anime.title}
            altTitle={anime.altTitle}
            href={anime.href}
            imgName={anime.imgName}
            starred={anime.starred}
          />
        ))}
      </div>
    </MainLayout>
  )
}

export default Anime
