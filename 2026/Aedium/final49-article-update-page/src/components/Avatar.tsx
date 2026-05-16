function Avatar({
  avatarURL = '',
  username,
}: {
  avatarURL?: string;
  username: string;
}) {
  return (
    <div className={`avatar ${avatarURL ? '' : 'avatar-placeholder'}`}>
      <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
        {avatarURL && <img src={avatarURL} />}
        {!avatarURL && (
          <span className="text-xl uppercase">{username.slice(0, 2)}</span>
        )}
      </div>
    </div>
  );
}

export default Avatar;
